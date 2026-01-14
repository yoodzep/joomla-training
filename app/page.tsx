// 1. Fixed the path to point to the specific file
// 2. Renamed the import to match the name you want to use
import JoomlaTraining from '@/components/joomla-training';

export default function Home() {
  return (
    <main>
      {/* 3. Removed the space; JSX tags must match the variable name exactly */}
      <JoomlaTraining />
    </main>
  );
}