import { MembersService } from './../../_services/members.service';
import { Component, inject, OnInit } from '@angular/core';
import { MemberCardComponent } from "../member-card/member-card.component";

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [MemberCardComponent],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css',
})
export class MemberListComponent implements OnInit {
 memberService = inject(MembersService);
  constructor() {
    if(this.memberService.members().length ===0)
      this.loadMembers();
  }

  ngOnInit(): void {}
  loadMembers() {
    this.memberService.getMembers();
  }
}
