export class ImageInformation {
  constructor(
    public src: string,
    public alt: string,
  ) {
  }

  get fileName(): string {
    return this.src.split('/').pop()!
  }
}
