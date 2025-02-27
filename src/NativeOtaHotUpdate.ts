import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  setupBundlePath(path: string, extension: string): Promise<boolean>;
  setExactBundlePath(path: string): Promise<boolean>;
  deleteBundle(i: number): Promise<boolean>;
  restart(): void;
  getCurrentVersion(a: number): Promise<string>;
  getUpdateMetadata(): Promise<object | null>;
  setCurrentVersion(version: string): Promise<boolean>;
  setUpdateMetadata(metadata:any): Promise<boolean>;
  rollbackToPreviousBundle(a: number): Promise<boolean>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('OtaHotUpdate');
