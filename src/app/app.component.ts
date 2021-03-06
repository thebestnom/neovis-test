import {Component, OnInit} from '@angular/core';
import NeoVis from 'neovis.js';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    title = 'Neovis-Anuglar-Test';

    config = {
        container_id: 'viz',
        server_url: 'bolt://localhost:7687',
        server_user: 'neo4j',
        server_password: 'sorts-swims-burglaries',
        labels: {
            // "Character": "name",
            Character: {
                caption: 'name',
                size: 'pagerank',
                community: 'community'
                // "sizeCypher": "MATCH (n) WHERE id(n) = {id} MATCH (n)-[r]-() RETURN sum(r.weight) AS c"
            }
        },
        relationships: {
            INTERACTS: {
                thickness: 'weight',
                caption: false
            }
        },
        initial_cypher: 'MATCH (n)-[r:INTERACTS]->(m) RETURN n,r,m'
    };

    viz: NeoVis;

    ngOnInit(): void {
        this.viz = new NeoVis(this.config);
        this.viz.render();
    }
}


