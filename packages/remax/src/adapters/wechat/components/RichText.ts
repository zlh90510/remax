import factory from './factory';
import { CSSProperties } from 'react';

const RichText = factory<RichTextProps>('rich-text');

export interface RichTextProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  nodes?: Array<any> | string; // [] 否 节点列表/HTML String 1.4.0
  space?: string; //  否 显示连续空格 2.4.1
  onClick?: (event: any) => void;
  animation?: Record<string, any>[];
}

export default RichText;
