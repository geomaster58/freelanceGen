import  {Component} from "@angular/core";
import {Document} from "./document";
@Component({
  moduleId: module.id,
  selector:"documents",
  templateUrl: "documents.component.html",
  styleUrls: ["documents.component.css"]
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  documents : Document[] = [
   {
     title: "My First Doc",
     description: "Blah Blah",
     file_url: "http://google.com",
     updated_at: "10/08/17",
     image_url:"http://maxpixel.freegreatpicture.com/static/photo/1x/Keyboard-Freelancer-Job-Search-Software-Programming-2529270.jpg"

   },
   {
     title: "My Second Doc",
     description: "Blah Blah",
     file_url: "http://google.com",
     updated_at: "10/08/17",
     image_url:"http://maxpixel.freegreatpicture.com/static/photo/1x/Keyboard-Freelancer-Job-Search-Software-Programming-2529270.jpg"

   },
   {
     title: "My Last Doc",
     description: "Blah Blah",
     file_url: "http://google.com",
     updated_at: "10/08/17",
     image_url:"http://maxpixel.freegreatpicture.com/static/photo/1x/Keyboard-Freelancer-Job-Search-Software-Programming-2529270.jpg"

   }
  ]
}
