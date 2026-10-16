"""Generate Reformix Gmail-signature PNG assets + mirror to public/email-signature/."""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent
SRC = ROOT / "_icons_src"
PUBLIC = ROOT.parents[2] / "public" / "email-signature"

# Reformix brand primary (#002e7c)
BRAND = (0, 46, 124)
# RUSO green to replace when tinting copied icons
RUSO_GREEN = (15, 115, 73)


def near(a: tuple[int, int, int], b: tuple[int, int, int], tol: int = 45) -> bool:
    return all(abs(x - y) <= tol for x, y in zip(a, b))


def tint_to_brand(src: Path, dest: Path) -> None:
    """Replace RUSO green (and nearby) with Reformix blue; keep alpha."""
    im = Image.open(src).convert("RGBA")
    pixels = im.load()
    assert pixels is not None
    w, h = im.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if a < 8:
                continue
            if near((r, g, b), RUSO_GREEN) or (g > r + 20 and g > b + 10 and g > 60):
                pixels[x, y] = (*BRAND, a)
    im.save(dest, "PNG", optimize=True)
    print("icon", dest.name)


def make_logo_mark(size: int, dest: Path) -> None:
    """Circular logo mark: brand blue plate + white R."""
    scale = 4
    s = size * scale
    canvas = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    d = ImageDraw.Draw(canvas)
    d.ellipse((0, 0, s - 1, s - 1), fill=BRAND + (255,))
    # thin inner ring (accent beige)
    inset = int(s * 0.06)
    d.ellipse(
        (inset, inset, s - 1 - inset, s - 1 - inset),
        outline=(243, 233, 210, 255),
        width=max(2, s // 48),
    )
    try:
        font = ImageFont.truetype("arialbd.ttf", int(s * 0.48))
    except OSError:
        try:
            font = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", int(s * 0.48))
        except OSError:
            font = ImageFont.load_default()
    text = "R"
    bbox = d.textbbox((0, 0), text, font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    # optical center slightly above geometric mid
    tx = (s - tw) // 2 - bbox[0]
    ty = (s - th) // 2 - bbox[1] - int(s * 0.03)
    d.text((tx, ty), text, font=font, fill=(255, 255, 255, 255))
    out = canvas.resize((size, size), Image.Resampling.LANCZOS)
    out.save(dest, "PNG", optimize=True)
    print("logo", dest.name)


def make_cta_icon(dest: Path, size: int = 48) -> None:
    """White clipboard / quote glyph for terracotta CTA button."""
    scale = 4
    s = size * scale
    canvas = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    d = ImageDraw.Draw(canvas)
    # document
    d.rounded_rectangle(
        (int(s * 0.22), int(s * 0.12), int(s * 0.78), int(s * 0.88)),
        radius=int(s * 0.08),
        outline=(255, 255, 255, 255),
        width=max(3, s // 16),
    )
    # lines
    for i, yf in enumerate((0.38, 0.52, 0.66)):
        x1 = int(s * (0.34 if i < 2 else 0.34))
        x2 = int(s * (0.66 if i < 2 else 0.55))
        y = int(s * yf)
        d.line((x1, y, x2, y), fill=(255, 255, 255, 255), width=max(3, s // 20))
    out = canvas.resize((size, size), Image.Resampling.LANCZOS)
    out.save(dest, "PNG", optimize=True)
    print("icon", dest.name)


def main() -> None:
    PUBLIC.mkdir(parents=True, exist_ok=True)

    make_logo_mark(180, ROOT / "reformix-mark-180.png")
    make_logo_mark(500, ROOT / "reformix-mark-500.png")
    make_cta_icon(ROOT / "icon-trial-btn.png")

    # Tint contact-row + social icons from RUSO green assets
    for name in (
        "icon-email.png",
        "icon-web.png",
        "icon-whatsapp.png",
        "icon-whatsapp-16.png",
        "icon-facebook.png",
        "icon-instagram.png",
        "icon-linkedin.png",
        "icon-contact.png",
        "icon-legal.png",
        "icon-trial.png",
    ):
        src = SRC / name
        if not src.exists():
            # fall back to sibling copies placed in _icons_src
            alt = ROOT / "_icons_src" / name
            src = alt if alt.exists() else None
        if src is None or not src.exists():
            print("skip missing", name)
            continue
        tint_to_brand(src, ROOT / name)

    for f in ROOT.glob("*.png"):
        (PUBLIC / f.name).write_bytes(f.read_bytes())
        print("public", f.name)


if __name__ == "__main__":
    main()
