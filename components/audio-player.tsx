"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

const sampleTracks = [
  {
    title: "River Flows in You - Yiruma",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/river%20flows%20in%20you-%20harp%20_%29-QrPGSM4aPKKqKEm4Kf0zFGMCRAsyXj.mp3",
  },
  {
    title: "Be Thou My Vision",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/be%20thou%20my%20vision-Kn7OgJyGpaTdH106H2fHkt8AzeypTW.mp3",
  },
  {
    title: "Jesu, Joy of Man's Desiring - Bach",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jesu%20Joy%20of%20Man%27s%20Desiring%20-%20Harp-xjNS7koJtt1hr8qFCCr8dUt98D8vnc.mp3",
  },
  {
    title: "Kiss the Rain - Yiruma",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kiss%20the%20Rain%20-%20Harp-3axmhTxtMBUY6dhfTWT9pHQc0SkLL4.mp3",
  },
]

export function AudioPlayer() {
  const [playingTrack, setPlayingTrack] = useState<number | null>(null)
  const [duration, setDuration] = useState<number[]>(new Array(sampleTracks.length).fill(0))
  const [currentTime, setCurrentTime] = useState<number[]>(new Array(sampleTracks.length).fill(0))
  const [volume, setVolume] = useState(0.7)
  const [isMuted, setIsMuted] = useState(false)

  const audioRefs = useRef<(HTMLAudioElement | null)[]>([])

  useEffect(() => {
    audioRefs.current = audioRefs.current.slice(0, sampleTracks.length)
  }, [])

  const togglePlay = (index: number) => {
    if (playingTrack === index) {
      audioRefs.current[index]?.pause()
      setPlayingTrack(null)
    } else {
      if (playingTrack !== null) {
        audioRefs.current[playingTrack]?.pause()
      }
      audioRefs.current[index]?.play()
      setPlayingTrack(index)
    }
  }

  const handleTimeUpdate = (index: number) => {
    const audio = audioRefs.current[index]
    if (audio) {
      setCurrentTime((prev) => {
        const newTimes = [...prev]
        newTimes[index] = audio.currentTime
        return newTimes
      })
    }
  }

  const handleLoadedMetadata = (index: number) => {
    const audio = audioRefs.current[index]
    if (audio) {
      setDuration((prev) => {
        const newDurations = [...prev]
        newDurations[index] = audio.duration
        return newDurations
      })
    }
  }

  const handleEnded = (index: number) => {
    setPlayingTrack(null)
    setCurrentTime((prev) => {
      const newTimes = [...prev]
      newTimes[index] = 0
      return newTimes
    })
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value)
    setVolume(newVolume)
    audioRefs.current.forEach((audio) => {
      if (audio) audio.volume = newVolume
    })
    setIsMuted(newVolume === 0)
  }

  const toggleMute = () => {
    const newMuted = !isMuted
    setIsMuted(newMuted)
    audioRefs.current.forEach((audio) => {
      if (audio) audio.volume = newMuted ? 0 : volume
    })
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const renderAudioPlayer = (track: (typeof sampleTracks)[0], index: number, isMain = false) => (
    <div key={index} className={`${isMain ? "mb-8" : "mb-4"} bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm`}>
      <audio
        ref={(el) => (audioRefs.current[index] = el)}
        src={track.src}
        onTimeUpdate={() => handleTimeUpdate(index)}
        onLoadedMetadata={() => handleLoadedMetadata(index)}
        onEnded={() => handleEnded(index)}
      />
      <h3 className={`${isMain ? "text-2xl" : "text-xl"} font-serif mb-4 text-gray-800 dark:text-white`}>
        {track.title}
      </h3>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => togglePlay(index)}
          className="p-2 bg-[#d4b98c] text-white rounded-full hover:bg-[#c0a678] transition-colors"
          aria-label={playingTrack === index ? "Pause" : "Play"}
        >
          {playingTrack === index ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
        </button>
        <div className="flex-grow">
          <input
            type="range"
            min={0}
            max={duration[index]}
            value={currentTime[index]}
            onChange={(e) => {
              const newTime = Number(e.target.value)
              if (audioRefs.current[index]) {
                audioRefs.current[index]!.currentTime = newTime
              }
            }}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
            <span>{formatTime(currentTime[index])}</span>
            <span>{formatTime(duration[index])}</span>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-8 rounded-xl">
      {renderAudioPlayer(sampleTracks[0], 0, true)}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sampleTracks.slice(1).map((track, index) => renderAudioPlayer(track, index + 1))}
      </div>
      <div className="mt-6 flex items-center justify-end space-x-4">
        <button
          onClick={toggleMute}
          className="text-gray-600 dark:text-gray-300 hover:text-[#d4b98c] dark:hover:text-[#d4b98c] transition-colors"
        >
          {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
        </button>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={isMuted ? 0 : volume}
          onChange={handleVolumeChange}
          className="w-24"
        />
      </div>
    </div>
  )
}

