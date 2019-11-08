import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

export class DialogData {

  name: string;
  value: string;
}

@Component({
  selector: 'app-command-dialog',
  templateUrl: './command-dialog.component.html',
  styleUrls: ['./command-dialog.component.scss']
})
export class CommandDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CommandDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  ngOnInit() {
  }
}
