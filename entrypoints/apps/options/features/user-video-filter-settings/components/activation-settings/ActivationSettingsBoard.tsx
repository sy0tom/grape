import { Switch } from "#/components/ui/switch";
import { FeatureActivationService } from "#/domain";

interface Props {
  isActive: boolean;
  activationService: FeatureActivationService;
}

function ActivationSettingsForm({ isActive, activationService }: Props) {
  const [checked, setChecked] = useState(isActive);

  const handleSave = async () => {
    const next = { videoFilter: !checked };
    setChecked(next.videoFilter);
    try {
      await activationService.save(next);
    } catch (error) {
      console.error("Error saving activation state:", error);
      setChecked(!next.videoFilter);
    }
  };

  return <Switch checked={checked} onClick={handleSave} />;
}

export default ActivationSettingsForm;
