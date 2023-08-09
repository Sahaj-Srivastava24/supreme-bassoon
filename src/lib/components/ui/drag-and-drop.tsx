import { useDropzone } from 'react-dropzone';
import type { FileWithPath } from 'react-dropzone';

import { useUploadThing } from '@/lib/utils/upload-thing';
import { useCallback, useState } from 'react';
import renameFiles from '@/lib/utils/rename-files';

const DragAndDrop = () => {
  const [files, setFiles] = useState<File[]>([]);
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    setFiles(renameFiles(acceptedFiles));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    // accept: fileTypes ? generateClientDropzoneAccept(fileTypes) : undefined,
  });

  const { isUploading, startUpload } = useUploadThing('pdfUploader', {
    onClientUploadComplete: (file) => {
      console.log(file);
      alert('uploaded successfully!');
    },
    onUploadError: (e) => {
      console.log(e);
      alert('error occurred while uploading');
    },
    onUploadProgress: (progress: number) => {
      console.log(progress);
    },
  });

  console.log(files);

  if (isUploading) {
    return (
      <div className="relative flex justify-center items-center flex-col gap-8 w-96 h-52 border-dashed rounded-lg border border-gray-400">
        <p>Uploading</p>
      </div>
    );
  }

  if (files.length != 0) {
    return (
      <div
        onClick={() => startUpload(files)}
        className="relative flex justify-center items-center flex-col gap-8 w-96 h-52 border-dashed rounded-lg border border-gray-400"
      >
        <p>Ready to upload</p>
      </div>
    );
  }

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div className="relative flex justify-center items-center flex-col gap-8 w-96 h-52 border-dashed rounded-lg border border-gray-400">
        <p>Drag & Drop files here to upload</p>
        <p>Browse Files</p>
      </div>
    </div>
  );
};

export default DragAndDrop;
