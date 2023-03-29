const normalizeText = (text: string) => {
  return text.replace(/\n/g, ' ').trim();
}

export default normalizeText;
