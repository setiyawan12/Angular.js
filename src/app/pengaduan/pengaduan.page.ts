import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-pengaduan',
  templateUrl: './pengaduan.page.html',
  styleUrls: ['./pengaduan.page.scss'],
})
export class PengaduanPage implements OnInit {
  datauser: any;
  constructor(
    public api: ApiService
  ) { }

  ngOnInit() {
    this.getDataUser
  }
  async getDataUser() {
    await this.api.getDataUser()
      .subscribe(res => {
        console.log(res);
        this.datauser = res.results;
        console.log(this.datauser);
      }, err => {
        console.log(err);
      });
  }

}
