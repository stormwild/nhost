import { Box } from '@/components/ui/v2/Box';
import { Button } from '@/components/ui/v2/Button';
import { ArrowLeftIcon } from '@/components/ui/v2/icons/ArrowLeftIcon';
import { ArrowRightIcon } from '@/components/ui/v2/icons/ArrowRightIcon';
import { InfoIcon } from '@/components/ui/v2/icons/InfoIcon';
import { Slider } from '@/components/ui/v2/Slider';
import { Text } from '@/components/ui/v2/Text';
import { Tooltip } from '@/components/ui/v2/Tooltip';
import {
  MAX_SERVICES_MEM,
  MEM_CPU_RATIO,
  MIN_SERVICES_MEM,
} from '@/features/projects/resources/settings/utils/resourceSettingsValidationSchema';
import type { ServiceFormValues } from '@/features/services/components/ServiceForm';
import { useFormContext, useWatch } from 'react-hook-form';

export default function ComputeFormSection() {
  const { setValue } = useFormContext<ServiceFormValues>();

  const formValues = useWatch<ServiceFormValues>();

  const handleSliderUpdate = (value: string) => {
    const updatedMem = parseFloat(value);

    if (Number.isNaN(updatedMem) || updatedMem < MIN_SERVICES_MEM) {
      return;
    }

    setValue('compute.memory', Math.floor(updatedMem), { shouldDirty: true });
    setValue('compute.cpu', Math.floor(updatedMem / MEM_CPU_RATIO), {
      shouldDirty: true,
    });
  };

  const incrementCompute = () => {
    const newMemoryValue = formValues.compute.memory + 128;
    setValue('compute.memory', newMemoryValue);
    setValue('compute.cpu', Math.floor(newMemoryValue / MEM_CPU_RATIO));
  };

  const decrementCompute = () => {
    const newMemoryValue = formValues.compute.memory - 128;
    setValue('compute.memory', newMemoryValue);
    setValue('compute.cpu', Math.floor(newMemoryValue / MEM_CPU_RATIO));
  };

  return (
    <Box className="p-4 space-y-4 rounded border-1">
      <Box className="flex flex-row items-center space-x-2">
        <Text variant="h4" className="font-semibold">
          CPU: {formValues.compute.cpu} / Memory: {formValues.compute.memory}
        </Text>

        <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s">
          <InfoIcon aria-label="Info" className="w-4 h-4" color="primary" />
        </Tooltip>
      </Box>

      <Box className="flex flex-row items-center justify-between space-x-4">
        <Button
          disabled={formValues.compute.memory <= MIN_SERVICES_MEM}
          variant="outlined"
          onClick={decrementCompute}
        >
          <ArrowLeftIcon className="w-4 h-4" />
        </Button>

        <Slider
          value={Number(formValues.compute.memory)}
          onChange={(_event, value) => handleSliderUpdate(value.toString())}
          max={MAX_SERVICES_MEM}
          min={MIN_SERVICES_MEM}
          step={256}
          aria-label="Compute resources"
          marks
        />
        <Button
          disabled={formValues.compute.memory >= MAX_SERVICES_MEM}
          variant="outlined"
          onClick={incrementCompute}
        >
          <ArrowRightIcon className="w-4 h-4" />
        </Button>
      </Box>
    </Box>
  );
}
