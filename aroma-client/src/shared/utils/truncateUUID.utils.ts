export const truncateUUID = (
  uuid: string,
  firstPartLength: number = 8,
  lastPartLength: number = 5
): string => {
  if (!uuid || typeof uuid !== 'string' || uuid.length < 9) {
    return uuid || 'Not found!'
  }
  const firstPart = uuid.substring(0, firstPartLength)
  const lastPart = uuid.substring(uuid.length - lastPartLength)
  return `${firstPart}...${lastPart}`
}
