import { FileUploader } from '@aws-amplify/ui-react'; 
import React from 'react';

export function FileUploaderButton() {

    return (
      <FileUploader
        acceptedFileTypes={['image/*','.gif', '.bmp', '.doc', '.jpeg', '.jpg']}
        accessLevel="private"
        variation="button"
      />
    );
}