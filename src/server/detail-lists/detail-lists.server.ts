import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import { Detail } from '../../Login/details/details.Login';

@Injectable()
export class detailListServer{

    private detailListRef = this.db.list<Detail>
    ('detail-lists');

    constructor(private db: AngularFireDatabase){}

        getDetailList(){
            return this.detailListRef;
        }

        addDetail(detail: Detail){
            return this.detailListRef.push(detail);
        }
    }
