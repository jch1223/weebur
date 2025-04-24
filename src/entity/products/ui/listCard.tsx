import Image from 'next/image';
import { CaptionsIcon, StarIcon } from 'lucide-react';
import { Product } from '@/entity/products/api/productsApi';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/shared/ui/card';
import { Skeleton } from '@/shared/ui/skeleton';

type ListCardProps = Omit<Product, 'id'>;

export const ListCard = ({
  title,
  description,
  thumbnail,
  rating,
  reviews,
}: ListCardProps) => {
  return (
    <Card>
      <CardContent className="flex gap-6">
        <div className="flex shrink-0 items-center justify-center">
          <Image src={thumbnail} alt={title} width={100} height={100} />
        </div>

        <div className="flex flex-col justify-between gap-2">
          <CardTitle>{title}</CardTitle>

          <CardDescription>{description}</CardDescription>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <StarIcon className="h-4 w-4 text-yellow-500" />
              <span className="text-sm text-gray-500">{rating}</span>
            </div>

            <div className="flex items-center gap-1">
              <CaptionsIcon className="h-4 w-4" />
              <span className="text-sm text-gray-500">{reviews.length}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ListCardSkeleton = () => {
  return (
    <Card className="w-full">
      <CardContent className="flex gap-6">
        <Skeleton className="h-25 w-25 shrink-0" />

        <div className="flex w-full flex-col justify-between gap-2">
          <Skeleton className="h-5" />
          <Skeleton className="h-10" />
          <Skeleton className="h-5" />
        </div>
      </CardContent>
    </Card>
  );
};

ListCard.Skeleton = ListCardSkeleton;
