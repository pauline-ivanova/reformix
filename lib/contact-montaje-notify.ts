/** Back-compat re-exports — prefer `@/lib/contact-services`. */
export {
  buildMontajeContactEmailBlock,
  buildMontajeContactTelegramHtml,
  isMontajeService as shouldAttachMontajeNotify,
} from './contact-services';
