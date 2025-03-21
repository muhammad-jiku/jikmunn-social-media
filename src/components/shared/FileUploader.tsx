import { convertFileToUrl } from '@/lib/utils';
import { useCallback, useState } from 'react';
import { FileWithPath, useDropzone } from 'react-dropzone';
import { Button } from '../ui/button';

type FileUploaderProps = {
  fieldChange: (files: File[]) => void;
  mediaUrl: string;
};

const FileUploader = ({ fieldChange, mediaUrl }: FileUploaderProps) => {
  const [file, setFile] = useState<File[]>([]);
  const [fileUrl, setFileUrl] = useState<string>(mediaUrl);

  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      setFile(acceptedFiles);
      fieldChange(acceptedFiles);
      setFileUrl(convertFileToUrl(acceptedFiles[0]));
    },
    [fieldChange]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpeg', '.jpg'],
    },
  });

  return (
    <div
      {...getRootProps()}
      className='flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer'
    >
      <input {...getInputProps()} className='cursor-pointer' />

      {fileUrl ? (
        <>
          <div className='flex flex-1 justify-center w-full p-5 lg:p-10'>
            <img
              src={fileUrl}
              alt='Selected file'
              className='file_uploader-img'
            />
          </div>
          <p className='file_uploader-label'>Click or drag photo to replace</p>
          {/* Display file details */}
          {file.length > 0 && (
            <div className='mt-2 text-sm text-gray-600'>
              <p>File Name: {file[0].name}</p>
              <p>File Size: {(file[0].size / 1024).toFixed(2)} KB</p>
            </div>
          )}
        </>
      ) : (
        <div className='file_uploader-box'>
          <img
            src='/assets/icons/file-upload.svg'
            width={96}
            height={77}
            alt='file upload'
          />
          <h3 className='base-medium text-light-2 mb-2 mt-6'>
            Drag photo here
          </h3>
          <p className='text-light-4 small-regular mb-6'>SVG, PNG, JPG</p>
          <Button type='button' className='shad-button_dark_4'>
            Select from computer
          </Button>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
