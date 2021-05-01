import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {

 // member: Member;

 // constructor( private memberService: MemberServices, private route; ActivatedRoute) { }

  ngOnInit(): void {
  }
/*loadMember()
{
  this.memberService.getMember(this.route.snapshot.paraMap)
}*/
}
