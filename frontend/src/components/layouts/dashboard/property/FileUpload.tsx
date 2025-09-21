"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";

type Props = {
  onChange: (file: File | null) => void;
};

const FileUpload = ({ onChange }: Props) => {
  const [preview, setPreview] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setPreview(URL.createObjectURL(file));
      onChange(file);
    } else {
      setPreview("");
      onChange(null);
    }
  };

  return (
    <div>
      <Input type="file" accept="image/*" onChange={handleFileChange} />
      {preview && (
        <div className="mt-4">
          <Image
            src={preview}
            alt="Preview"
            width={120}
            height={120}
            className="rounded-lg border object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default FileUpload;
