import {Component} from "@angular/core";
import {Proposal} from "./proposal";


@Component ({
 moduleId: module.id,
 selector: "proposal-list",
 templateUrl: "proposal-list.component.html"
})
export class ProposalListComponent {
  proposalOne : Proposal = new Proposal(15, "HeyyYo Company", "http://jj-portfolio.com", "Angular", 150, 126, 15, "jjkeeney129285@gmail.com")
  proposalTwo : Proposal = new Proposal(15, "HyYo Company", "http://jj-portfolio.com", "Angular", 150, 150, 15, "jjkeeney129285@gmail.com")
  proposalThree : Proposal = new Proposal(15, "HeyY Company", "http://jj-portfolio.com", "Angular", 150, 120, 15, "jjkeeney129285@gmail.com")

  proposals: Proposal[] = [this.proposalOne, this.proposalTwo, this.proposalThree ]
}