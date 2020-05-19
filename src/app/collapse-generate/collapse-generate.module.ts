import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CollapseGenerateRoutes } from './collapse-generate.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapseGenerateToolComponent } from './collapse-generate-tool/collapse-generate-tool.component';
import { CustomNgZorroAntdModule } from '../ng-zorro-antd.module';

@NgModule({
    declarations: [CollapseGenerateToolComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CustomNgZorroAntdModule,
        // Re-use module here, ex: FormsModule, ReactiveFormsModule,

        // Routes
        RouterModule.forChild(CollapseGenerateRoutes),
    ]
})
export class CollapseGenerateModule { }
