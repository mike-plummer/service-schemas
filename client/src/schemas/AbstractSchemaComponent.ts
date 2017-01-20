import { COLLAPSED_ICON, EXPANDED_ICON } from './constants';

export abstract class AbstractSchemaComponent {
  public icon: string = COLLAPSED_ICON;
  public expanded: boolean = false;

  toggle(): void {
    this.expanded = !this.expanded;
    this.icon = this.expanded ? EXPANDED_ICON : COLLAPSED_ICON;
  }
}