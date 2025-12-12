import { motion } from "framer-motion";

export default function LoadingScreen() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="flex flex-col items-center">
                <img src="/logo.svg" alt="Vritula" width={36} height={36} className="shrink-0" />

                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                    <span className="text-xl font-semibold text-slate-900">Vritula</span>
                </motion.span>

                <motion.p className="text-sm text-gray-500 mt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                    Preparing your experience...
                </motion.p>
            </motion.div>
        </div>
    );
}
