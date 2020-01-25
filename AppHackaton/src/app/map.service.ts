import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import * as firebase from 'firebase';
import {GeoJson, IGeoJson} from './map';
import * as mapboxgl from 'mapbox-gl';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Injectable({
    providedIn: 'root'
})
export class MapService {

    constructor(private db: AngularFireDatabase) {
        mapboxgl.accessToken = environment.mapbox.accessToken;
    }

    getMarkers(): AngularFireList<any> {
        return this.db.list('/markers');
    }

    createMarker(data: IGeoJson) {
        return this.db.list('/markers').push(data);
    }

    removeMarker($key: string) {
        return this.db.object('/markers/' + $key).remove();
    }
}
