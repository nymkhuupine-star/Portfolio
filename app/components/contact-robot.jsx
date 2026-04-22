export default function ContactRobot() {
  return (
    <div className="relative mt-12 h-56 w-full overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/[0.03]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:32px_32px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-background/60 via-transparent to-transparent"
      />

      <model-viewer
        src="https://threejs.org/examples/models/gltf/RobotExpressive/RobotExpressive.glb"
        alt="Robot"
        autoplay
        animation-name="Wave"
        camera-controls
        disable-zoom
        auto-rotate
        rotation-per-second="24deg"
        exposure="1.1"
        shadow-intensity="0.9"
        environment-image="neutral"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          background: "transparent",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent"
      />
    </div>
  );
}

