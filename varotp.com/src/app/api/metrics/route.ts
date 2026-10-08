import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const startedAt = Date.now();

function metric(name: string, help: string, type: 'gauge' | 'counter', value: number) {
  return `# HELP ${name} ${help}\n# TYPE ${name} ${type}\n${name} ${value}`;
}

export async function GET() {
  const memory = process.memoryUsage();
  const metrics = [
    metric('varotp_app_up', 'Whether the application metrics endpoint is available.', 'gauge', 1),
    metric('varotp_process_uptime_seconds', 'Application process uptime in seconds.', 'gauge', process.uptime()),
    metric('varotp_process_resident_memory_bytes', 'Resident memory used by the application process.', 'gauge', memory.rss),
    metric('varotp_process_heap_used_bytes', 'Heap memory used by the application process.', 'gauge', memory.heapUsed),
    metric('varotp_process_heap_total_bytes', 'Total heap memory allocated to the application process.', 'gauge', memory.heapTotal),
    metric('varotp_process_external_memory_bytes', 'Memory used by C++ objects bound to JavaScript.', 'gauge', memory.external),
    metric('varotp_app_start_time_seconds', 'Unix timestamp when this metrics module was initialized.', 'gauge', startedAt / 1000),
  ].join('\n\n');

  return new NextResponse(`${metrics}\n`, {
    headers: {
      'Content-Type': 'text/plain; version=0.0.4; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}
