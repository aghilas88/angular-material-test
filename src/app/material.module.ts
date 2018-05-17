import { NgModule } from '@angular/core';
import { MatButtonModule, MatMenuModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule, MatFormFieldModule,
  MatCardModule, MatGridListModule, MatInputModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  imports: [MatButtonModule, MatMenuModule, BrowserAnimationsModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule,
    MatExpansionModule, MatFormFieldModule, MatCardModule, MatGridListModule, MatInputModule],
  exports: [MatButtonModule, MatMenuModule, BrowserAnimationsModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule,
    MatExpansionModule, MatFormFieldModule, MatCardModule, MatGridListModule, MatInputModule]
})
export class MaterialModule { }
