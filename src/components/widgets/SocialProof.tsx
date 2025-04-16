import Image from 'next/image';
import { SocialProofProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';

const SocialProof = ({ images, id, hasBackground = false }: SocialProofProps) => (
<WidgetWrapper id={id ?? ''} hasBackground={hasBackground} containerClass="">
  <div className="flex items-center justify-center gap-6 md:gap-9">
    <p className="text-center text-sm font-medium text-muted-foreground tracking-wide opacity-80 transition-all duration-300 hover:opacity-100 hover:text-foreground md:text-base">
      Ils nous font confiance
    </p>
  </div>
</WidgetWrapper>

);

export default SocialProof;
