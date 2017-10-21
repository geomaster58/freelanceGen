import {Component, OnInit} from "@angular/core";
import {Proposal} from "./proposal";
import { Observable } from "rxjs/Rx";
import { ProposalService} from "./proposal.service";
import {Router} from "@angular/router";

@Component ({
 moduleId: module.id,
 selector: "proposal-list",
 templateUrl: "proposal-list.component.html",
 styleUrls: ["proposal-list.component.css"]
})
export class ProposalListComponent implements OnInit {
  proposals : Proposal[];
  errorMessage : string;
  mode = "Observable";

  constructor (
    private proposalService: ProposalService,
    private router : Router
    ){}
ngOnInit(){
  let timer = Observable.timer(0, 3000);
    timer.subscribe(() => this.getProposals());
}

getProposals(){
    this.proposalService.getProposals()
        .subscribe(
          proposals => this.proposals = proposals,
          error => this.errorMessage = <any>error
          );
  }

goToShow(proposal : Proposal) : void {
  let link = ["/proposal", proposal.id];
  this.router.navigate(link);
}

}