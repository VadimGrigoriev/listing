function formatTitle(title) {
  const updatedTitle = (title && title.length > 50 ? title.substring(0, 50) + '…' : title);

  return updatedTitle;
}

export default formatTitle;
