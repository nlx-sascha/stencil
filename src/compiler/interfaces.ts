

export interface GenerateConfig {
  srcDirs: string[];
  outDir: string;
  manifestFilePath: string;
  scriptTarget: 'es5' | 'es2015';
  module: 'es2015' | 'commonjs';
}


export interface FileMeta {
  fileName: string;
  fileExt: string;
  filePath: string;
  srcText: string;
  srcTextWithoutDecorators: string;
  isTsSourceFile: boolean;
  isTransformable: boolean;
  cmpMeta: ComponentMeta;
}


export interface GenerateContext {
  files?: Map<string, FileMeta>;
  components?: ComponentMeta[];
}


export interface CompilerConfig {
  buildDir: string;
  rollup: { rollup: Function };
  uglify: { minify: Function };
  sass: { render: Function };
  minifyJs: boolean;
  useHashId: boolean;
  manifestFilePath: string;
}


export interface CompilerResults {
  error: any;
}


export interface Registry {
  [tag: string]: any[];
}


export interface Bundle {
  id?: string;
  components?: {
    component: Component;
    mode: ComponentMode
  }[];
  content?: string;
  fileName?: string;
  filePath?: string;
}


export interface Manifest {
  components: CoreComponents;
  bundles: string[][];
}


export interface CoreComponents {
  [tag: string]: Component;
}


export interface Component {
  tag: string;
  modes: {[modeName: string]: ComponentMode};
  componentUrl: string;
  componentImporter: string;
}


export interface ComponentMode {
  name: string;
  styleUrls: string[];
  styles: string;
}


export interface CompilerContext {
  bundles: Bundle[];
  components: CoreComponents;
  registry: Registry;
  manifest: Manifest;
}


export interface ComponentMeta {
  tag?: string;
  props?: Props;
  observedAttrs?: string[];
  hostCss?: string;
  componentModule?: any;
  modes: {[modeName: string]: ComponentMode};
}


export interface PropOptions {
  type?: 'string' | 'boolean' | 'number' | 'Array' | 'Object';
}


export interface Props {
  [propName: string]: PropOptions;
}