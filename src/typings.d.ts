interface Navigator {
  msSaveOrOpenBlob?: (blob: any, defaultName?: string) => boolean;
  msSaveBlob?: (blob: any, defaultName?: string) => boolean;
}
