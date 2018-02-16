export class Book {
  id: string;
  title: string;
  subtitle: string;
  thumbnail: string;

  authors: string[];
  categories: string[];

  publishedDate: string;
  publisher: string;

  pageCount: number;
  printedPageCount: number;

  kind: string;
  description: string;

  constructor(device: any) {
      this.id = device.id;

      //Volume info
      if(device.volumeInfo){
        this.title = device.volumeInfo.title;
        this.subtitle = device.volumeInfo.subtitle;
        if(device.volumeInfo.imageLinks) {
          this.thumbnail = device.volumeInfo.imageLinks.smallThumbnail;
        }

        this.publisher = device.volumeInfo.publisher;
        this.description = device.volumeInfo.description;
        this.publishedDate = device.volumeInfo.publishedDate;
        this.pageCount = device.volumeInfo.pageCount;
        this.printedPageCount = device.volumeInfo.printedPageCount;

        this.authors = device.volumeInfo.authors;
        this.categories = device.volumeInfo.categories;
      }

      this.kind = device.kind;
  }
}
