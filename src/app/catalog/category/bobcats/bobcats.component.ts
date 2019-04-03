
import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
// import {Maquinaria} from '../shared/maquinaria';
// import {AppURL} from '../shared/appUrl';
// import {MaquinariaService} from '../services/maquinaria.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
// import {RequestService} from '../services/request.service';
import {Item} from '../../../shared/item';
import {ItemService} from '../../../services/item.service';
import {baseURL} from '../../../shared/baseurl';

@Component({
  selector: 'app-bobcats',
  templateUrl: './bobcats.component.html',
  styleUrls: ['./bobcats.component.scss']
})
export class BobcatsComponent implements OnInit {

  items: Item[];
  public url = baseURL + 'items';
  selectedFile: ImageSnippet;

  @Output() updateView = new EventEmitter();

  constructor(private http: HttpClient,
              @Inject('BaseURL') private BaseURL,
              public itemService: ItemService,
  ) {
  }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

  uploadImage(imageInput: any, id: number) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.selectedFile.pending = true;
      this.itemService.setImageItem(this.selectedFile.file, id).subscribe(
        (res) => {
          window.location.reload();
        },
        (err) => {
          window.location.reload();
        });
    });

    reader.readAsDataURL(file);
  }

  onDelete(id: number) {
    this.itemService.deleteItem(this.url, id).subscribe(
      response => {
        window.location.reload();
      },
      error => {
        window.location.reload();
      }
    );
  }
}

class ImageSnippet {
  pending = false;
  status = 'init';

  constructor(public src: string, public file: File) {}
}
