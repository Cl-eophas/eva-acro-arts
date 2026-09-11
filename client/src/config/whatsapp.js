export const WHATSAPP_NUMBER = '254796609521';
export const WHATSAPP_MESSAGE =
  'Hello Eva Acrodance and Art, I would like to make an enquiry about your training and performances.';
export const PERFORMANCE_WHATSAPP_MESSAGE =
  'Hello Eva Acrodance and Art, I would like to enquire about booking a performance.';
export const TRAINING_WHATSAPP_MESSAGE =
  'Hello Eva Acrodance and Art, I would like to enquire about training/classes.';

export const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
export const performanceWhatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PERFORMANCE_WHATSAPP_MESSAGE)}`;
export const trainingWhatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(TRAINING_WHATSAPP_MESSAGE)}`;
