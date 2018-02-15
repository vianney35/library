export class Book {
  id: string;
  title: string;
  thumbnail: string;

  kind: string;
  description: string;

  constructor(device: any) {
      this.id = device.id;

      //Volume info
      this.title = device.volumeInfo.title;

      if(device.volumeInfo.imageLinks) {
        this.thumbnail = device.volumeInfo.imageLinks.smallThumbnail;
      }

      this.description = device.volumeInfo.description;

      this.kind = device.kind;
  }
}
