import { Component } from '@angular/core';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent {
  img = new Promise((resolve, reject)=>{
    resolve("data:image/jpeg;base64,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")
  })
}
