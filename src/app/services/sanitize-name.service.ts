import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class SanitizeService {

  constructor(
    private sanitizer: DomSanitizer,
  ) { }

  public cleanName(name: string) {
    return this.sanitizer.bypassSecurityTrustHtml(name);
  }
}
