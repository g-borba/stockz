export const formatDate = (dateString) => {
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }
  const date = new Date(dateString)
  const formattedDate = date.toLocaleDateString(undefined, options)
  return `${formattedDate} `
}
