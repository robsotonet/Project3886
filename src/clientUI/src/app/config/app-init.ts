import { AppConfigService } from "./appconfigservice";

export function initializeSettings(appConfigService: AppConfigService): () => Promise<any> {
    return (): Promise<any> => {
      return appConfigService.loadConfig().toPromise().then(config => {
        appConfigService.setConfig(config);
      });
    };
  }