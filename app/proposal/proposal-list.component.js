"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var proposal_1 = require("./proposal");
var ProposalListComponent = /** @class */ (function () {
    function ProposalListComponent() {
        this.proposalOne = new proposal_1.Proposal(15, "HeyyYo Company", "http://jj-portfolio.com", "Angular", 150, 126, 15, "jjkeeney129285@gmail.com");
        this.proposalTwo = new proposal_1.Proposal(15, "HyYo Company", "http://jj-portfolio.com", "Angular", 150, 150, 15, "jjkeeney129285@gmail.com");
        this.proposalThree = new proposal_1.Proposal(15, "HeyY Company", "http://jj-portfolio.com", "Angular", 150, 120, 15, "jjkeeney129285@gmail.com");
        this.proposals = [this.proposalOne, this.proposalTwo, this.proposalThree];
    }
    ProposalListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "proposal-list",
            templateUrl: "proposal-list.component.html"
        })
    ], ProposalListComponent);
    return ProposalListComponent;
}());
exports.ProposalListComponent = ProposalListComponent;
//# sourceMappingURL=proposal-list.component.js.map