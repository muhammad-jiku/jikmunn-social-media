import { convertFileToUrl } from '@/lib/utils';
import { useCallback, useState } from 'react';
import { FileWithPath, useDropzone } from 'react-dropzone';

type ProfileUploaderProps = {
  fieldChange: (files: File[]) => void;
  mediaUrl: string;
};

const ProfileUploader = ({ fieldChange, mediaUrl }: ProfileUploaderProps) => {
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
    <div {...getRootProps()}>
      <input {...getInputProps()} className='cursor-pointer' />

      <div className='cursor-pointer flex-center gap-4'>
        <img
          src={fileUrl || '/assets/icons/profile-placeholder.svg'}
          alt='Profile'
          className='h-24 w-24 rounded-full object-cover object-top'
        />
        <div>
          <p className='text-primary-500 small-regular md:bbase-semibold'>
            Change profile photo
          </p>
          {file.length > 0 && (
            <p className='text-sm text-gray-600'>
              Selected file: {file[0].name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileUploader;
