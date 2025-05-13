import { Switch } from "#/components/ui/switch";
import { FeatureActivationService } from "#/domain";

interface Props {
  isActive: boolean;
  activationService: FeatureActivationService;
}

function ActivationSettingsBoard({ isActive, activationService }: Props) {
  const [checked, setChecked] = useState(isActive);

  const onSave = async (current: boolean) => {
    const next = !current;
    setChecked(next);
    try {
      await activationService.saveVideoFilterActivate(next);
    } catch (error) {
      console.error("Error saving activation state:", error);
      // Optionally, you can revert the state if the save fails
      setChecked(current);
    }
  };

  return (
    <div>
      <div>フィルターの有効化</div>
      <Switch checked={checked} onClick={() => onSave(checked)} />
    </div>
  );
}

export default ActivationSettingsBoard;
