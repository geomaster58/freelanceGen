import { Component, OnInit, Input } from "@angular/core";
import { Proposal} from "./proposal";
import { ActivatedRoute, Params} from "@angular/router";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { ProposalService} from "./proposal.service";


@Component({
  moduleId: module.id,
  selector: "proposal-show",
  templateUrl: "proposal-show.component.html",
  styleUrls: ["proposal-show.component.css"],
  providers: [ProposalService]
})

export class ProposalShowComponent implements OnInit{
  constructor (
    private http: Http,
    private route: ActivatedRoute,
    private proposalService: ProposalService
    ){ 
  }

  @Input()
  proposal: Proposal;

  ngOnInit(): void {
    let proposalRequest = this.route.params
        .flatMap((params: Params) => this.proposalService.getProposal(+params["id"]));
    proposalRequest.subscribe(response => this.proposal =response.json());    

  }
}