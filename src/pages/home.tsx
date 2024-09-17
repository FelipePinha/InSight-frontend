import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export function Home() {
    return (
        <div className="p-3 space-y-3">
            <Button variant="normal">
                teste button
            </Button>

            <Input placeholder="teu cu"/>
        </div>
    )
}