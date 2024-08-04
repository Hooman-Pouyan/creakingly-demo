import { makeOptional } from '../../../../core/models/transformers';
import { IUser } from './jamboard.model';

export type IJamElement = {
  id: string;
  appearence: TAppearence;
  data: TJamElementData;
  info: TJamElementInfo;
  size: TSize;
  position: TPosition;
  status: TJamElementStatus;
  options: unknown;
};

export type TJamElementData = {
  content: TJamElementContent;
};
export type TSize = { width: number; height: number };
export type TJamElementStatus =
  | 'selected'
  | 'editted'
  | 'grabbed'
  | 'resized'
  | 'pinned'
  | '';
export type TPosition = { x: number; y: number };

export enum EJameElementStatus {
  Selected = 'selected',
  Editted = 'editted',
  Grabbed = 'grabbed',
  Resized = 'resized',
  Pinned = 'pinned',
}

export type TJamElementContent = {
  title: string;
  content: string;
  imageUrl: string;
};

export type TJamElementInfo = makeOptional<{
  createAt: Date;
  modifiedAt: Date;
  createdBy: Pick<IUser, 'id'>;
  modifiedBy: Pick<IUser, 'id'>;
}>;

export type TAppearence = makeOptional<{
  width: number;
  height: number;
  opacity: number;
}>;
export { IUser };
