import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "my-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"]
})
export class SidenavComponent {
  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);
}