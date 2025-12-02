import { Injectable } from '@angular/core';
// import { MatSnackBar } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(
    private snackBar: MatSnackBar,
    private translate: TranslateService,
  ) { }

  openSnackBar(message: string, action?: string) {
    console.log(message,"openSnackBar");
    
    this.translate.get(message).subscribe((res: string) => {
      this.snackBar.open(res, action, {
        duration: 2000,
      });
    });
  }
}
