import { Switch } from "#/components/ui/switch";
import { FeatureActivationService } from "#/domain";

interface Props {
  isActive: boolean;
  activationService: FeatureActivationService;
}

function ActivationSettingsForm({ isActive, activationService }: Props) {
  const [checked, setChecked] = useState(isActive);

  const onSave = async (current: boolean) => {
    const next = !current;
    setChecked(next);
    try {
      await activationService.saveVideoFilterActivate(next);
    } catch (error) {
      console.error("Error saving activation state:", error);
      setChecked(current);
    }
  };

  return <Switch checked={checked} onClick={() => onSave(checked)} />;
}

export default ActivationSettingsForm;
