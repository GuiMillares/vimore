const WHATSAPP_NUMBER = "55XXXXXXXXXXX"; // TODO: substituir pelo número real, formato 55DDDNNNNNNNNN

export function whatsappLink(servico: string) {
  const mensagem = `Olá! Vim pelo site e quero falar sobre ${servico}.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
}
